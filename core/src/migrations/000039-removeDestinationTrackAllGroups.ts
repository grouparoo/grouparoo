export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.addColumn("destinations", "groupGuid", {
        type: DataTypes.STRING(40),
        allowNull: true,
      });

      const [destinations] = await migration.sequelize.query(
        'select * from "destinations"'
      );
      for (const i in destinations) {
        const destination = destinations[i];

        if (destinations.trackAllGroups) {
          await migration.sequelize.query(
            `delete from "destinationGroups" where "destinationGuid" = '${destinations.guid}'`
          );
        } else {
          const destinationGroups = await migration.sequelize.query(
            `select * from "destinationGroups" where "destinationGuid" = '${destination.guid}'`
          );
          if (destinationGroups.length === 1) {
            await migration.sequelize.query(
              `update destinations set "groupGuid" = '${destinationGroups[0].groupGuid}'`
            );
          }
        }
      }

      await migration.removeColumn("destinations", "trackAllGroups");

      await migration.dropTable("destinationGroups");
    });
  },

  down: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("destinations", "groupGuid");

      await migration.addColumn("destinations", "trackAllGroups", {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      });

      // not rebuilding the destinationGroups table
    });
  },
};
