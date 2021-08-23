import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("apiKeys", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      apiKey: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      name: {
        type: DataTypes.TEXT,
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

    await queryInterface.addIndex("apiKeys", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await queryInterface.addIndex("apiKeys", ["apiKey"], {
      unique: true,
      fields: ["apiKey"],
    });

    await queryInterface.createTable("permissions", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      ownerGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      ownerType: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      topic: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      write: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      locked: {
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

    await queryInterface.addIndex("permissions", ["ownerGuid", "topic"], {
      unique: true,
      fields: ["ownerGuid", "topic"],
    });

    await queryInterface.removeColumn("teams", "read");
    await queryInterface.removeColumn("teams", "write");
    await queryInterface.removeColumn("teams", "administer");
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("apiKeys");
    await queryInterface.dropTable("permissions");
  },
};
