import { config } from "actionhero";

const tables = {
  apiKeys: ["apiKey"],
  apps: [],
  destinationGroupMemberships: ["destinationId", "groupId"],
  destinations: ["appId", "groupId"],
  eventData: ["eventId"],
  events: ["producerId", "profileId"],
  exports: ["profileId", "destinationId"],
  files: [],
  groupMembers: ["profileId", "groupId"],
  groupRules: ["groupId", "propertyId"],
  groups: [],
  imports: ["creatorId", "profileId"],
  logs: ["ownerId"],
  mappings: ["ownerId", "propertyId"],
  notifications: [],
  options: ["ownerId"],
  permissions: ["ownerId"],
  profileProperties: ["profileId", "propertyId"],
  profiles: [],
  properties: ["sourceId"],
  propertyFilters: ["propertyId"],
  runs: ["creatorId", "destinationId"],
  schedules: ["sourceId"],
  sessions: [],
  settings: [],
  setupSteps: [],
  sources: ["appId"],
  teamMembers: ["teamId"],
  teams: [],
};

const runMigration = async ({ maxIdLength, migration, DataTypes }) => {
  const changeColumn = async (tableName, columnName) => {
    if (config.sequelize?.dialect !== "sqlite") {
      const query = `ALTER TABLE "${tableName}" ALTER COLUMN "${columnName}" SET DATA TYPE varchar(${maxIdLength}); `;
      await migration.sequelize.query(query);
    } else {
      await migration.changeColumn(tableName, columnName, {
        type: DataTypes.STRING(191),
      });
    }
  };

  await migration.sequelize.transaction(async () => {
    for (const [tableName, columnNames] of Object.entries(tables)) {
      await changeColumn(tableName, "id");
      for (const columnName of columnNames) {
        await changeColumn(tableName, columnName);
      }
    }
  });
};

export default {
  up: async function (migration, DataTypes) {
    await runMigration({ maxIdLength: 191, migration, DataTypes });
  },

  down: async function (migration, DataTypes) {
    await runMigration({ maxIdLength: 40, migration, DataTypes });
  },
};
