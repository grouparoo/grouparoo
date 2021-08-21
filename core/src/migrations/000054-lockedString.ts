const tables = [
  "apiKeys",
  "apps",
  "destinations",
  "groups",
  "permissions",
  "profilePropertyRules",
  "sources",
  "schedules",
  "settings",
  "teams",
  "teamMembers",
];

import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    for (const i in tables) {
      const table = tables[i];
      await queryInterface.changeColumn(table, "locked", {
        type: DataTypes.STRING(191),
        allowNull: true,
        defaultValue: null,
      });
      if (table !== "teams") {
        await queryInterface.sequelize.query(
          `UPDATE "${table}" SET locked='config:code' WHERE (locked = '1' OR locked = 'true')`
        );
      } else {
        await queryInterface.sequelize.query(
          `UPDATE "${table}" SET locked='team:initialize' WHERE (locked = '1' OR locked = 'true') AND name = 'Administrators' AND "permissionAllWrite" = true AND "permissionAllRead" = true`
        );
        await queryInterface.sequelize.query(
          `UPDATE "${table}" SET locked='config:code' WHERE (locked = '1' OR locked = 'true') AND name != 'Administrators'`
        );
      }
      await queryInterface.sequelize.query(
        `UPDATE "${table}" SET locked=NULL WHERE (locked = '0' OR locked = 'false')`
      );
    }
  },

  down: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    for (const i in tables) {
      await queryInterface.changeColumn(tables[i], "locked", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      });
    }
  },
};
