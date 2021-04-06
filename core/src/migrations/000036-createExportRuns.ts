export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("exportRuns", {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        exportGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        runGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },

        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      });

      await migration.addIndex("exportRuns", ["exportGuid", "runGuid"], {
        unique: true,
        fields: ["exportGuid", "runGuid"],
      });

      await migration.removeColumn("exports", "runGuids");
    });
  },

  down: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("exportRuns");

      await migration.addColumn("exports", "runGuids", {
        type: DataTypes.TEXT,
        allowNull: true,
      });
    });
  },
};
