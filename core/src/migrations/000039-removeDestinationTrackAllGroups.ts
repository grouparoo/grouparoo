import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("destinations", "groupGuid", {
      type: DataTypes.STRING(40),
      allowNull: true,
    });

    const [destinations]: [Record<string, any>[], unknown] =
      await queryInterface.sequelize.query('select * from "destinations"');
    for (const destination of destinations) {
      if (destination["trackAllGroups"]) {
        await queryInterface.sequelize.query(
          `delete from "destinationGroups" where "destinationGuid" = '${destination["guid"]}'`
        );
      } else {
        const [destinationGroups]: [Record<string, any>[], unknown] =
          await queryInterface.sequelize.query(
            `select * from "destinationGroups" where "destinationGuid" = '${destination["guid"]}'`
          );
        if (destinationGroups.length === 1) {
          await queryInterface.sequelize.query(
            `update destinations set "groupGuid" = '${destinationGroups[0]["groupGuid"]}'`
          );
        }
      }
    }

    await queryInterface.removeColumn("destinations", "trackAllGroups");

    await queryInterface.dropTable("destinationGroups");
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.removeColumn("destinations", "groupGuid");

    await queryInterface.addColumn("destinations", "trackAllGroups", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    // not rebuilding the destinationGroups table
  },
};
