import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("runs", "limit");
    await queryInterface.removeColumn("runs", "offset");
    await queryInterface.removeColumn("runs", "method");
  },
};
