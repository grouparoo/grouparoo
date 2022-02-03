import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.removeColumn("imports", "rawData");
    await queryInterface.removeColumn("imports", "oldRecordProperties");
    await queryInterface.removeColumn("imports", "newRecordProperties");
    await queryInterface.removeColumn("imports", "oldGroupIds");
    await queryInterface.removeColumn("imports", "newGroupIds");
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("imports", "rawData", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("imports", "oldRecordProperties", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("imports", "newRecordProperties", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("imports", "oldGroupIds", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("imports", "newGroupIds", {
      type: DataTypes.TEXT,
      allowNull: true,
    });
  },
};
