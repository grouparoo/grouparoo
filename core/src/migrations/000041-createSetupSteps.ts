import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("setupSteps", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      position: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },

      key: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      skipped: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      complete: {
        type: DataTypes.BOOLEAN,
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
    });

    await queryInterface.addIndex("setupSteps", ["key"], {
      unique: true,
      fields: ["key"],
    });
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.dropTable("setupSteps");
  },
};
