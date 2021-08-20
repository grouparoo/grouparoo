export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("groupMembers", {
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

    await migration.addIndex("groupMembers", ["profileGuid", "groupGuid"], {
      unique: true,
      fields: ["profileGuid", "groupGuid"],
    });

    await migration.addIndex("groupMembers", ["profileGuid"], {
      fields: ["profileGuid"],
    });

    await migration.addIndex("groupMembers", ["groupGuid"], {
      fields: ["groupGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("groupMembers");
  },
};
