import Sequelize from "sequelize";
import { MigrationUtils } from "../utils/migration";

export default {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    const manualGroupsCount = await MigrationUtils.countRows(
      queryInterface,
      "groups",
      "type != 'calculated'"
    );

    if (manualGroupsCount > 0) {
      throw new Error(
        "There are manual Groups. Grouparoo v0.8 removes support for Manual Groups.  Please remove them and try again."
      );
    }

    await queryInterface.removeColumn("groups", "type");
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("groups", "type", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });
  },
};
