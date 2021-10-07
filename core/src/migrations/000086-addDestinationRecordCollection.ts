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

    await queryInterface.changeColumn("destinations", "collection", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await queryInterface.renameColumn(
      "runs",
      "groupMemberLimit",
      "memberLimit"
    );
    await queryInterface.renameColumn(
      "runs",
      "groupMemberOffset",
      "memberOffset"
    );
    await queryInterface.renameColumn("runs", "groupMethod", "method");
    await queryInterface.removeColumn("runs", "groupHighWaterMark");
  },

  down: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.removeColumn("destinations", "recordCollection");
    await queryInterface.renameColumn(
      "runs",
      "memberLimit",
      "groupMemberLimit"
    );
    await queryInterface.renameColumn(
      "runs",
      "memberOffset",
      "groupMemberOffset"
    );
    await queryInterface.renameColumn("runs", "groupMethod", "method");
    await queryInterface.addColumn("runs", "groupHighWaterMark", {
      type: DataTypes.BIGINT,
      allowNull: true,
    });
  },
};
