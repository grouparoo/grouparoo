import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("destinations", "recordCollection", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.sequelize.query(
      `UPDATE "destinations" SET "recordCollection"='group' WHERE "groupId" IS NOT NULL`
    );
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("destinations", "recordCollection");
  },
};
