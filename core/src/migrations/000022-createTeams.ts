import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("teams", {
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

      name: {
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

      administer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      deletable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("teams", ["name"], {
      unique: true,
      fields: ["name"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("teams");
  },
};
