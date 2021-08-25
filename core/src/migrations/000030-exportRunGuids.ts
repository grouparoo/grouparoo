import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("runs", "exportsCreated", {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
    });

    await queryInterface.addColumn("exports", "runGuids", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("runs", "exportsCreated");
    await queryInterface.removeColumn("exports", "runGuids");
  },
};
