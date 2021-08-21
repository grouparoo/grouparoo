import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("logs", {
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

      ownerGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      topic: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      verb: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      who: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("logs", ["topic"], {
      fields: ["topic"],
    });

    await queryInterface.addIndex("logs", ["ownerGuid"], {
      fields: ["ownerGuid"],
    });

    await queryInterface.addIndex("logs", ["createdAt"], {
      fields: ["createdAt"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("logs");
  },
};
