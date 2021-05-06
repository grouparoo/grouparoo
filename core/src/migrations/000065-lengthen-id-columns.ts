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

let primaryKeyConstraints = {};

let pKeyQuery = `
SELECT
  kcu.table_schema,
  kcu.table_name,
  tco.constraint_name,
  kcu.ordinal_position AS position,
  kcu.column_name AS key_column
FROM
  information_schema.table_constraints tco
  JOIN information_schema.key_column_usage kcu ON kcu.constraint_name = tco.constraint_name
    AND kcu.constraint_schema = tco.constraint_schema
    AND kcu.constraint_name = tco.constraint_name
WHERE
  tco.constraint_type = 'PRIMARY KEY'
  AND kcu.table_schema = 'public'
ORDER BY
  kcu.table_schema,
  kcu.table_name,
  position;
`;

const runMigration = async ({ maxIdLength, migration, DataTypes }) => {
  await migration.sequelize.transaction(async () => {
    if (config.sequelize.dialect === "postgres") {
      const [rows] = await migration.sequelize.query(pKeyQuery);
      primaryKeyConstraints = Object.fromEntries(
        rows.map((row) => [row.table_name, row.constraint_name])
      );
    }

    for (const [tableName, columnNames] of Object.entries(tables)) {
      if (config.sequelize.dialect === "postgres") {
        await migration.removeConstraint(
          tableName,
          primaryKeyConstraints[tableName]
        );
      }

      await migration.changeColumn(tableName, "id", {
        type: DataTypes.STRING(maxIdLength),
        primaryKey: true,
      });

      if (config.sequelize.dialect === "postgres") {
        await migration.addConstraint(tableName, {
          fields: ["id"],
          type: "primary key",
          name: primaryKeyConstraints[tableName],
        });
      }

      for (const columnName of columnNames) {
        await migration.changeColumn(tableName, columnName, {
          type: DataTypes.STRING(maxIdLength),
        });
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
