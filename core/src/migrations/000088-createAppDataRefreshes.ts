import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("appDataRefreshes", {
      id: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
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
        allowNull: false,
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
        defaultValue: "draft",
      },

      lastChangedAt: {
        type: DataTypes.DATE,
      },

      lastConfirmedAt: {
        type: DataTypes.DATE,
      },
    });

    await queryInterface.changeColumn("appDataRefreshes", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
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
