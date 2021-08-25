import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("exportRuns");
    await queryInterface.dropTable("exportImports");

    await queryInterface.removeColumn("runs", "exportsCreated");
    await queryInterface.removeColumn("runs", "profilesExported");
  },

  down: async () => {
    throw new Error("cannot recover data for this migration");
  },
};
