import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("runs", "limit", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await queryInterface.addColumn("runs", "offset", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await queryInterface.addColumn("runs", "method", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("runs", "limit");
    await queryInterface.removeColumn("runs", "offset");
    await queryInterface.removeColumn("runs", "method");
  },
};
