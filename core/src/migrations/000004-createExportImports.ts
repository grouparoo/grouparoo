export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("exportImports", {
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

    await migration.addIndex("exportImports", ["importGuid", "exportGuid"], {
      unique: true,
      fields: ["importGuid", "exportGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("exportImports");
  },
};
