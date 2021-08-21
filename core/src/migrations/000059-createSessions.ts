import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("sessions", {
      id: {
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

      teamMemberId: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      fingerprint: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.addIndex("sessions", ["fingerprint"], {
      unique: true,
      fields: ["fingerprint"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("sessions");
  },
};
