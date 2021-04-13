export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("runs", "filter");
      await migration.removeColumn("runs", "highWaterMark");

      await migration.addColumn("runs", "highWaterMark", {
        type: DataTypes.TEXT,
        allowNull: true,
      });

      await migration.addColumn("runs", "sourceOffset", {
        type: DataTypes.STRING(191),
        allowNull: true,
      });

      await migration.renameColumn("runs", "limit", "groupMemberLimit");
      await migration.renameColumn("runs", "offset", "groupMemberOffset");
      await migration.renameColumn("runs", "method", "groupMethod");
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.removeColumn("runs", "highWaterMark");
      await migration.removeColumn("runs", "sourceOffset");

      await migration.renameColumn("runs", "groupMemberLimit", "limit");
      await migration.renameColumn("runs", "groupMemberOffset", "offset");
      await migration.renameColumn("runs", "groupMethod", "method");
    });
  },
};
