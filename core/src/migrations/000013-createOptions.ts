import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("options", {
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

      ownerType: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      key: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      value: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("options", ["ownerGuid", "key"], {
      unique: true,
      fields: ["ownerGuid", "key"],
    });

    await queryInterface.addIndex("options", ["ownerGuid"], {
      fields: ["ownerGuid"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("options");
  },
};
