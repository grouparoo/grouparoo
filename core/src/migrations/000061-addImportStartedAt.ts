import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("imports", "startedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("imports", "startedAt");
  },
};
