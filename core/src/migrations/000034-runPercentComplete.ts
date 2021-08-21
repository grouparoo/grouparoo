import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("runs", "percentComplete", {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("runs", "percentComplete");
  },
};
