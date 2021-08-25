import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("sources", {
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

      appGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await queryInterface.addIndex("sources", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await queryInterface.addIndex("sources", ["appGuid"], {
      fields: ["appGuid"],
    });

    await queryInterface.addIndex("sources", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("sources");
  },
};
