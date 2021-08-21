import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("runs", "destinationId", {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: null,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("runs", "destinationId");
  },
};
