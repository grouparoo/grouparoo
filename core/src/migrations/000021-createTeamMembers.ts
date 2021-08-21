import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("teamMembers", {
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

      teamGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      firstName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      lastName: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      passwordHash: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      lastLoginAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("teamMembers", ["email"], {
      unique: true,
      fields: ["email"],
    });

    await queryInterface.addIndex("teamMembers", ["teamGuid"], {
      fields: ["teamGuid"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("teamMembers");
  },
};
