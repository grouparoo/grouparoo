import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.removeIndex("appRefreshQueries", ["appId"], {
      fields: ["appId"],
    });
    await queryInterface.addIndex("appRefreshQueries", ["appId"], {
      unique: true,
      fields: ["appId"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeIndex("appRefreshQueries", ["appId"], {
      unique: true,
      fields: ["appId"],
    });
  },
};
