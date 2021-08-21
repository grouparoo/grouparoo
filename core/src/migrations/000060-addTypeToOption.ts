import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("options", "type", {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "string",
    });

    await queryInterface.changeColumn("options", "type", {
      type: DataTypes.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("options", "type");
  },
};
