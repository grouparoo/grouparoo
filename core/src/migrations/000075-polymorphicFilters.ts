export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.renameTable("propertyFilters", "filters");

      await migration.renameColumn("filters", "propertyId", "ownerId");

      await migration.addColumn("filters", "ownerType", {
        type: DataTypes.STRING(191),
        allowNull: false,
        defaultValue: "property",
      });

      await migration.changeColumn("filters", "ownerType", {
        type: DataTypes.STRING(191),
        allowNull: false,
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropColumn("filters", "ownerType");
      await migration.renameColumn("filters", "ownerId", "propertyId");
      await migration.renameTable("filters", "propertyFilters");
    });
  },
};
