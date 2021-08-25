import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("destinationGroupMemberships", {
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

      destinationGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      groupGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      remoteKey: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
    });

    await queryInterface.addIndex(
      "destinationGroupMemberships",
      ["destinationGuid", "groupGuid"],
      {
        unique: true,
        fields: ["destinationGuid", "groupGuid"],
      }
    );

    await queryInterface.addIndex(
      "destinationGroupMemberships",
      ["destinationGuid", "remoteKey"],
      {
        unique: true,
        fields: ["destinationGuid", "remoteKey"],
      }
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("destinationGroupMemberships");
  },
};
