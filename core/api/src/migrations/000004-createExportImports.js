const TABLE = "exportImports";

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

      importGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      exportGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    });

    await migration.addIndex(TABLE, ["importGuid", "exportGuid"], {
      unique: true,
      fields: ["importGuid", "exportGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable(TABLE);
  },
};
