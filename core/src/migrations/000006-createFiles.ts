import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("files", {
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

      transport: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      bucket: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      path: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      extension: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      mime: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      sizeBytes: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("files", ["type"], {
      fields: ["type"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("files");
  },
};
