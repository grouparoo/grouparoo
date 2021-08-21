import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("properties", "keepValueIfNotFound", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });

    await queryInterface.changeColumn("properties", "keepValueIfNotFound", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("properties", "keepValueIfNotFound");
  },
};
