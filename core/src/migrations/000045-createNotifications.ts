import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("notifications", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      from: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      subject: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      cta: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      ctaLink: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      readAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("notifications");
  },
};
