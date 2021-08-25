import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("properties", "keepValueIfNotFound");
  },

  down: async () => {
    throw new Error("irreversible migration");
  },
};
