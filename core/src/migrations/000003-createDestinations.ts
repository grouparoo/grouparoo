import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("destinations", {
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

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      trackAllGroups: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("destinations", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await queryInterface.addIndex("destinations", ["appGuid"], {
      fields: ["appGuid"],
    });

    await queryInterface.addIndex("destinations", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("destinations");
  },
};
