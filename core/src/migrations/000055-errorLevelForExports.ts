export default {
  up: async function (migration, DataTypes) {
    await migration.addColumn("exports", "errorLevel", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: null,
    });

    await migration.sequelize.query(
      `UPDATE "exports" SET "errorLevel"='error' WHERE "errorMessage" IS NOT NULL`
    );
  },

  down: async function (migration) {
    await migration.removeColumn("exports", "errorLevel");
  },
};
