import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("logs");
  },

  down: async () => {
    throw new Error("irreversible migration");
  },
};
