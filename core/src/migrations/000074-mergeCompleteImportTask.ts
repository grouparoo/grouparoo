import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    // Kick profiles back to "pending" if they're ready but their imports are not
    await queryInterface.sequelize.query(
      `UPDATE "profiles" SET "state"='pending' WHERE "state"='ready' AND "id" IN
          (SELECT DISTINCT("profileId") FROM "imports" WHERE "exportedAt" IS NULL AND "profileUpdatedAt" IS NULL AND "groupsUpdatedAt" IS NULL)`
    );
  },

  async down() {
    // nothing to do
  },
};
