// Note: This migration should have also updated `options.ownerType`.  Corrected in migration 000079.

import Sequelzie from "sequelize";

export default {
  up: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.renameColumn(
      "groupRules",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );
    await queryInterface.renameColumn(
      "mappings",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );
    await queryInterface.renameColumn(
      "profileProperties",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );
    await queryInterface.renameColumn(
      "profilePropertyRuleFilters",
      "profilePropertyRuleGuid",
      "propertyGuid"
    );

    await queryInterface.renameTable("profilePropertyRules", "properties");
    await queryInterface.renameTable(
      "profilePropertyRuleFilters",
      "propertyFilters"
    );
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.renameTable("properties", "profilePropertyRules");
    await queryInterface.renameTable(
      "propertyFilters",
      "profilePropertyRuleFilters"
    );

    await queryInterface.renameColumn(
      "groupRules",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
    await queryInterface.renameColumn(
      "mappings",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
    await queryInterface.renameColumn(
      "profileProperties",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
    await queryInterface.renameColumn(
      "profilePropertyRuleFilters",
      "propertyGuid",
      "profilePropertyRuleGuid"
    );
  },
};
