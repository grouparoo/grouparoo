export default {
  up: async function (migration, DataTypes) {
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

    await migration.addIndex("filters", ["ownerId", "ownerType", "position"], {
      fields: ["ownerId", "ownerType", "position"],
      unique: true,
    });
  },

  down: async function (migration) {
    await migration.removeIndex(
      "filters",
      ["ownerId", "ownerType", "position"],
      {
        fields: ["ownerId", "ownerType", "position"],
        unique: true,
      }
    );
    await migration.removeColumn("filters", "ownerType");
    await migration.renameColumn("filters", "ownerId", "propertyId");
    await migration.renameTable("filters", "propertyFilters");
  },
};
