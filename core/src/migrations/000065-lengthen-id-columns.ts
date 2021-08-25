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

const runMigration = async ({
  maxIdLength,
  queryInterface,
  DataTypes,
}: {
  maxIdLength: number;
  queryInterface: Sequelize.QueryInterface;
  DataTypes: typeof Sequelize;
}) => {
  const changeColumn = async (tableName, columnName) => {
    if (config.sequelize?.dialect !== "sqlite") {
      const query = `ALTER TABLE "${tableName}" ALTER COLUMN "${columnName}" SET DATA TYPE varchar(${maxIdLength}); `;
      await queryInterface.sequelize.query(query);
    } else {
      await queryInterface.changeColumn(tableName, columnName, {
        type: DataTypes.STRING(191),
      });
    }
  };

  for (const [tableName, columnNames] of Object.entries(tables)) {
    await changeColumn(tableName, "id");
    for (const columnName of columnNames) {
      await changeColumn(tableName, columnName);
    }
  }
};

import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await runMigration({ maxIdLength: 191, queryInterface, DataTypes });
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await runMigration({ maxIdLength: 40, queryInterface, DataTypes });
  },
};
