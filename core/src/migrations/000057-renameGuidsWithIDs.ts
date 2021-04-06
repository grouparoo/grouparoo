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
};

export default {
  up: async function (migration) {
    await migration.sequelize.transaction(async () => {
      for (const table in tables) {
        await migration.renameColumn(table, "guid", "id");
        const cols = tables[table];
        for (const j in cols) {
          const oldName = cols[j];
          const newName = oldName.replace("Guid", "Id");
          await migration.renameColumn(table, oldName, newName);
        }
      }
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      for (const table in tables) {
        await migration.renameColumn(table, "id", "guid");
        const cols = tables[table];
        for (const j in cols) {
          const newName = cols[j];
          const oldName = newName.replace("Guid", "Id");
          await migration.renameColumn(table, oldName, newName);
        }
      }
    });
  },
};
