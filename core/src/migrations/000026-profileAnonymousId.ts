export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("profiles", "anonymousId", {
        type: DataTypes.STRING(191),
        allowNull: true,
      });

      await migration.addIndex("profiles", ["anonymousId"], {
        fields: ["anonymousId"],
        unique: true,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("profiles", "anonymousId");
    });
  },
};
