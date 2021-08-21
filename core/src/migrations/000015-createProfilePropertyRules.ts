import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("profilePropertyRules", {
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

      key: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      unique: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      sourceGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await queryInterface.addIndex("profilePropertyRules", ["key"], {
      fields: ["key"],
      unique: true,
    });

    await queryInterface.addIndex("profilePropertyRules", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("profilePropertyRules");
  },
};
