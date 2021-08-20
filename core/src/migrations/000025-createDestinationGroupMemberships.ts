export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("destinationGroupMemberships", {
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

    await migration.addIndex(
      "destinationGroupMemberships",
      ["destinationGuid", "groupGuid"],
      {
        unique: true,
        fields: ["destinationGuid", "groupGuid"],
      }
    );

    await migration.addIndex(
      "destinationGroupMemberships",
      ["destinationGuid", "remoteKey"],
      {
        unique: true,
        fields: ["destinationGuid", "remoteKey"],
      }
    );
  },

  down: async function (migration) {
    await migration.dropTable("destinationGroupMemberships");
  },
};
