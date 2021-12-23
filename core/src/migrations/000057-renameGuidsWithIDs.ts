const tables = {
  apiKeys: [],
  apps: [],
  destinationGroupMemberships: ["destinationGuid", "groupGuid"],
  destinations: ["appGuid", "groupGuid"],
  eventData: ["eventGuid"],
  events: ["producerGuid", "profileGuid"],
  exports: ["profileGuid", "destinationGuid"],
  files: [],
  groupMembers: ["profileGuid", "groupGuid"],
  groupRules: ["groupGuid", "propertyGuid"],
  groups: [],
  imports: ["creatorGuid", "profileGuid", "oldGroupGuids", "newGroupGuids"],
  logs: ["ownerGuid"],
  mappings: ["ownerGuid", "propertyGuid"],
  notifications: [],
  options: ["ownerGuid"],
  permissions: ["ownerGuid"],
  profileProperties: ["profileGuid", "propertyGuid"],
  profiles: [],
  properties: ["sourceGuid"],
  propertyFilters: ["propertyGuid"],
  runs: ["creatorGuid"],
  schedules: ["sourceGuid"],
  settings: [],
  setupSteps: [],
  sources: ["appGuid"],
  teamMembers: ["teamGuid"],
  teams: [],
} as const;

import Sequelize from "sequelize";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    for (const [table, cols] of Object.entries(tables)) {
      await queryInterface.renameColumn(table, "guid", "id");
      for (const j in cols) {
        const oldName = cols[j];
        const newName = oldName.replace("Guid", "Id");
        await queryInterface.renameColumn(table, oldName, newName);
      }
    }
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    for (const [table, cols] of Object.entries(tables)) {
      await queryInterface.renameColumn(table, "id", "guid");
      for (const j in cols) {
        const newName = cols[j];
        const oldName = newName.replace("Guid", "Id");
        await queryInterface.renameColumn(table, oldName, newName);
      }
    }
  },
};
