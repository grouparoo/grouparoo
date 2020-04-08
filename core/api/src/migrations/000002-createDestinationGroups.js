const TABLE = "destinationGroups";

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

      destinationGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      groupGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    });

    await migration.addIndex(TABLE, ["destinationGuid", "groupGuid"], {
      unique: true,
      fields: ["destinationGuid", "groupGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
