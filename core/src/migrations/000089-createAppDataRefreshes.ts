import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("appDataRefreshes", {
      id: {
        type: DataTypes.STRING(191),
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

      appId: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      refreshQuery: {
        type: DataTypes.TEXT,
      },

      value: {
        type: DataTypes.TEXT,
      },

      locked: {
        type: DataTypes.STRING(191),
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      lastChangedAt: {
        type: DataTypes.DATE,
      },

      lastConfirmedAt: {
        type: DataTypes.DATE,
      },
    });

    await queryInterface.addColumn("schedules", "refreshEnabled", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: "true",
    });

    await queryInterface.changeColumn("schedules", "refreshEnabled", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    await queryInterface.addIndex("appDataRefreshes", ["appId"], {
      fields: ["appId"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("appDataRefreshes");
  },
};
