import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.addColumn("destinations", "collection", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.sequelize.query(
      `UPDATE "destinations" SET "collection"='group' WHERE "groupId" IS NOT NULL AND state='ready'`
    );

    await queryInterface.addColumn("runs", "collection", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.removeColumn("destinations", "recordCollection");
  },
};
