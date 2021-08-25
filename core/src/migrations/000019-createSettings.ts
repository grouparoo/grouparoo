import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("settings", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      pluginName: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      key: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      value: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      defaultValue: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("settings", ["pluginName", "key"], {
      unique: true,
      fields: ["pluginName", "key"],
    });

    await queryInterface.addIndex("settings", ["pluginName"], {
      fields: ["pluginName"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("settings");
  },
};
