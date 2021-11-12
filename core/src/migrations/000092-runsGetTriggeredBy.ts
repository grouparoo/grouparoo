import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("runs", "triggeredBy", {
      type: DataTypes.STRING,
      allowNull: true,
    });
    await queryInterface.addIndex("runs", ["triggeredBy"], {
      fields: ["triggeredBy"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("runs", "triggeredBy");

    await queryInterface.removeIndex("runs", ["triggeredBy"], {
      fields: ["triggeredBy"],
    });
  },
};
