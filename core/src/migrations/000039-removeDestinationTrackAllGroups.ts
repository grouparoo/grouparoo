import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.addColumn("destinations", "groupGuid", {
      type: DataTypes.STRING(40),
      allowNull: true,
    });

    const [destinations] = await queryInterface.sequelize.query(
      'select * from "destinations"'
    );
    for (const i in destinations) {
      const destination = destinations[i];

      if (destinations["trackAllGroups"]) {
        await queryInterface.sequelize.query(
          `delete from "destinationGroups" where "destinationGuid" = '${destinations["guid"]}'`
        );
      } else {
        const [destinationGroups] = await queryInterface.sequelize.query(
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
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.removeColumn("destinations", "groupGuid");

    await queryInterface.addColumn("destinations", "trackAllGroups", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    });

    // not rebuilding the destinationGroups table
  },
};
