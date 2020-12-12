module.exports = {
  up: async function (migration) {
    await migration.renameColumn("groupRules", "propertyGuid", "propertyGuid");
    await migration.renameColumn("mappings", "propertyGuid", "propertyGuid");
    await migration.renameColumn(
      "profileProperties",
      "propertyGuid",
      "propertyGuid"
    );
    await migration.renameColumn(
      "propertyFilters",
      "propertyGuid",
      "propertyGuid"
    );

    await migration.renameTable("properties", "properties");
    await migration.renameTable("propertyFilters", "propertyFilters");
  },

  down: async function (migration) {
    await migration.renameTable("properties", "properties");
    await migration.renameTable("propertyFilters", "propertyFilters");

    await migration.renameColumn("groupRules", "propertyGuid", "propertyGuid");
    await migration.renameColumn("mappings", "propertyGuid", "propertyGuid");
    await migration.renameColumn(
      "profileProperties",
      "propertyGuid",
      "propertyGuid"
    );
    await migration.renameColumn(
      "propertyFilters",
      "propertyGuid",
      "propertyGuid"
    );
  },
};
