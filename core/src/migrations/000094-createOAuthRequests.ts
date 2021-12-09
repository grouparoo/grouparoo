import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("oAuthRequests", {
      id: {
        type: DataTypes.STRING(191),
        primaryKey: true,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      provider: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      identities: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      appId: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      appOption: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("oAuthRequests");
  },
};
