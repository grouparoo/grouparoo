export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.sequelize.query(
        `UPDATE "groupRules" set "profileColumn" = 'grouparooId' WHERE "profileColumn" = 'id' AND "propertyId" IS NULL;`
      );
      await migration.sequelize.query(
        `UPDATE "groupRules" set "profileColumn" = 'grouparooCreatedAt' WHERE "profileColumn" = 'createdAt' AND "propertyId" IS NULL;`
      );
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.sequelize.query(
        `UPDATE "groupRules" set "profileColumn" = 'id' WHERE "profileColumn" = 'grouparooId' AND "propertyId" IS NULL;`
      );
      await migration.sequelize.query(
        `UPDATE "groupRules" set "profileColumn" = 'createdAt' WHERE "profileColumn" = 'grouparooCreatedAt' AND "propertyId" IS NULL;`
      );
    });
  },
};
