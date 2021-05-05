const columnChanges = {
  apiKeys: ["apiKey", "id"],
  apps: ["id"],
  destinationGroupMemberships: ["id", "destinationId", "groupId"],
  destinations: ["id", "appId", "groupId"],
  eventData: ["id", "eventId"],
  events: ["id", "producerId", "profileId"],
  exports: ["id", "profileId", "destinationId"],
  files: ["id"],
  groupMembers: ["id", "profileId", "groupId"],
  groupRules: ["id", "groupId", "propertyId"],
  groups: ["id"],
  imports: ["id", "creatorId", "profileId"],
  logs: ["id", "ownerId"],
  mappings: ["id", "ownerId", "propertyId"],
  notifications: ["id"],
  options: ["id", "ownerId"],
  permissions: ["id", "ownerId"],
  profileProperties: ["id", "profileId", "propertyId"],
  profiles: ["id"],
  properties: ["id", "sourceId"],
  propertyFilters: ["id", "propertyId"],
  runs: ["id", "creatorId", "destinationId"],
  schedules: ["id", "sourceId"],
  sessions: ["id"],
  settings: ["id"],
  setupSteps: ["id"],
  sources: ["id", "appId"],
  teamMembers: ["id", "teamId"],
  teams: ["id"],
};

export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      for (const [tableName, columnNames] of Object.entries(columnChanges)) {
        for (const columnName of columnNames) {
          await migration.changeColumn(tableName, columnName, {
            type: DataTypes.STRING(191),
          });
        }
      }
    });
  },

  down: async function (migration, DataTypes) {
    for (const [tableName, columnNames] of Object.entries(columnChanges)) {
      for (const columnName of columnNames) {
        await migration.changeColumn(tableName, columnName, {
          type: DataTypes.STRING(40),
        });
      }
    }
  },
};
