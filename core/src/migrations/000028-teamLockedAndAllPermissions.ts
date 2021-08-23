import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.renameColumn("teams", "deletable", "locked");

    await queryInterface.addColumn("teams", "permissionAllRead", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });
    await queryInterface.addColumn("teams", "permissionAllWrite", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });

    await queryInterface.addColumn("apiKeys", "permissionAllRead", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });
    await queryInterface.addColumn("apiKeys", "permissionAllWrite", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.renameColumn("teams", "locked", "deletable");
    await queryInterface.removeColumn("teams", "permissionAllRead");
    await queryInterface.removeColumn("teams", "permissionAllWrite");
    await queryInterface.removeColumn("apiKeys", "permissionAllRead");
    await queryInterface.removeColumn("apiKeys", "permissionAllWrite");
  },
};
