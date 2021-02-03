export default {
  up: async function (migration, DataTypes) {
    await migration.renameColumn("teams", "deletable", "locked");

    await migration.addColumn("teams", "permissionAllRead", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });
    await migration.addColumn("teams", "permissionAllWrite", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });

    await migration.addColumn("apiKeys", "permissionAllRead", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });
    await migration.addColumn("apiKeys", "permissionAllWrite", {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.renameColumn("teams", "locked", "deletable");
    await migration.removeColumn("teams", "permissionAllRead");
    await migration.removeColumn("teams", "permissionAllWrite");
    await migration.removeColumn("apiKeys", "permissionAllRead");
    await migration.removeColumn("apiKeys", "permissionAllWrite");
  },
};
