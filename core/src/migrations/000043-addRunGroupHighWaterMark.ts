import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("runs", "groupHighWaterMark", {
      type: DataTypes.BIGINT,
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("runs", "groupHighWaterMark");
  },
};
