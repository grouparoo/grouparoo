export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("destinations", "syncMode", {
        type: DataTypes.STRING(191),
        allowNull: false,
        defaultValue: "sync",
      });

      await migration.sequelize.query(
        `UPDATE "destinations" SET "syncMode"='sync'`
      );

      // TODO Intercom option migration
      // creationMode Enrich, removalMode Skip => Enrich
      // creationMode != Enrich, removalMode Skip => Additive
      // creationMode Enrich, removalMode != Skip => ???? Only update and delete
    });
  },

  down: async function (migration) {
    await migration.removeColumn("destinations", "syncMode");
  },
};
