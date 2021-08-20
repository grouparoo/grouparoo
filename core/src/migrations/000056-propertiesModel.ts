// Note: This migration should have also updated `options.ownerType`.  Corrected in migration 000079.

export default {
  up: async function (migration) {
    await migration.renameColumn(
      "groupRules",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );
    await migration.renameColumn(
      "mappings",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );
    await migration.renameColumn(
      "profileProperties",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );
    await migration.renameColumn(
      "profilePropertyRuleFilters",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );

    await migration.renameTable("profilePropertyRules", "properties");
    await migration.renameTable(
      "profilePropertyRuleFilters",
      "propertyFilters"
    );
  },

  down: async function (migration) {
    await migration.renameTable("properties", "profilePropertyRules");
    await migration.renameTable(
      "propertyFilters",
      "profilePropertyRuleFilters"
    );

    await migration.renameColumn(
      "groupRules",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
    await migration.renameColumn(
      "mappings",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
    await migration.renameColumn(
      "profileProperties",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
    await migration.renameColumn(
      "profilePropertyRuleFilters",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
  },
};
