import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.removeColumn("runs", "filter");
    await queryInterface.removeColumn("runs", "highWaterMark");

    await queryInterface.addColumn("runs", "highWaterMark", {
      type: DataTypes.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn("runs", "sourceOffset", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await queryInterface.renameColumn("runs", "limit", "groupMemberLimit");
    await queryInterface.renameColumn("runs", "offset", "groupMemberOffset");
    await queryInterface.renameColumn("runs", "method", "groupMethod");
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.removeColumn("runs", "highWaterMark");
    await queryInterface.removeColumn("runs", "sourceOffset");

    await queryInterface.renameColumn("runs", "groupMemberLimit", "limit");
    await queryInterface.renameColumn("runs", "groupMemberOffset", "offset");
    await queryInterface.renameColumn("runs", "groupMethod", "method");
  },
};
