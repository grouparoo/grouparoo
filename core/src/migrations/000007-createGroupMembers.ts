import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("groupMembers", {
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

      profileGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      groupGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      removedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });

    await queryInterface.addIndex(
      "groupMembers",
      ["profileGuid", "groupGuid"],
      {
        unique: true,
        fields: ["profileGuid", "groupGuid"],
      }
    );

    await queryInterface.addIndex("groupMembers", ["profileGuid"], {
      fields: ["profileGuid"],
    });

    await queryInterface.addIndex("groupMembers", ["groupGuid"], {
      fields: ["groupGuid"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("groupMembers");
  },
};
