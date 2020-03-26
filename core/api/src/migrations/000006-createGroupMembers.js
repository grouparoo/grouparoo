module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "groupMembers",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        profileGuid: {
          type: DataTypes.UUID,
          allowNull: false,
        },

        groupGuid: {
          type: DataTypes.UUID,
          allowNull: false,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("groupMembers", ["profileGuid", "groupGuid"], {
      unique: true,
      fields: ["profileGuid", "groupGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("groupMembers");
  },
};
