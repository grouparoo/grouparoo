const tables = {
  apps: "app",
  connections: "con",
  files: "fil",
  groups: "grp",
  groupMembers: "mem",
  logs: "log",
  profiles: "pro",
  profileProperties: "prp",
  profilePropertyRules: "rul",
  runs: "run",
  settings: "set",
  teams: "tea",
  teamMembers: "tem",
};

const foriegnKeys = [
  { table: "connections", col: "appGuid", prefix: "app", allowNull: false },
  { table: "connections", col: "groupGuid", prefix: "grp", allowNull: true },
  {
    table: "groupMembers",
    col: "profileGuid",
    prefix: "pro",
    allowNull: false,
  },
  { table: "groupMembers", col: "groupGuid", prefix: "grp", allowNull: false },
  {
    table: "profileProperties",
    col: "profileGuid",
    prefix: "pro",
    allowNull: false,
  },
  { table: "runs", col: "connectionGuid", prefix: "con", allowNull: false },
  { table: "teamMembers", col: "teamGuid", prefix: "tea", allowNull: false },
];

module.exports = {
  up: async function (migration, DataTypes) {
    const tableNames = Object.keys(tables);

    for (const i in tableNames) {
      const table = tableNames[i];
      await migration.changeColumn(table, "guid", {
        type: DataTypes.STRING(40),
        allowNull: false,
      });

      const prefix = tables[table];
      await migration.sequelize.query(
        `UPDATE "${table}" SET guid = CONCAT('${prefix}_', guid)`
      );
    }

    for (const j in foriegnKeys) {
      const { table, col, prefix, allowNull } = foriegnKeys[j];

      await migration.changeColumn(table, col, {
        type: DataTypes.STRING(40),
        allowNull,
      });

      await migration.sequelize.query(
        `UPDATE "${table}" SET "${col}" = CONCAT('${prefix}_', "${col}")`
      );
    }
  },

  down: async function (migration, DataTypes) {
    const tableNames = Object.keys(tables);

    for (const i in tableNames) {
      const table = tableNames[i];
      await migration.changeColumn(table, "guid", {
        type: DataTypes.UUID,
        allowNull: false,
      });

      const prefix = tables[table];
      await migration.sequelize.query(
        `UPDATE "${table}" SET guid = REPLACE(guid , '${prefix}_', '')`
      );
    }

    for (const j in foriegnKeys) {
      const { table, col, prefix, allowNull } = foriegnKeys[j];

      await migration.changeColumn(table, col, {
        type: DataTypes.UUID,
        allowNull,
      });

      await migration.sequelize.query(
        `UPDATE "${table}" SET "${col}" = REPLACE(${col} , '${prefix}_', '')`
      );
    }
  },
};
