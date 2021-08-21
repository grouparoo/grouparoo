import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
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

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("runs", "exportsCreated");
    await queryInterface.removeColumn("exports", "runGuids");
  },
};
