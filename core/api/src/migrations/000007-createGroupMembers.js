const TABLE = "groupMembers";

module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(TABLE, {
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

    await migration.addIndex(TABLE, ["profileGuid", "groupGuid"], {
      unique: true,
      fields: ["profileGuid", "groupGuid"],
    });

    await migration.addIndex(TABLE, ["profileGuid"], {
      fields: ["profileGuid"],
    });

    await migration.addIndex(TABLE, ["groupGuid"], {
      fields: ["groupGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
