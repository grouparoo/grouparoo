module.exports = {
  up: async function (migration, DataTypes) {
    await migration.addColumn("profiles", "state", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: "ready",
    });
    await migration.changeColumn("profiles", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("profileProperties", "state", {
      type: DataTypes.STRING(191),
      allowNull: true,
      defaultValue: "ready",
    });
    await migration.changeColumn("profileProperties", "state", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("profileProperties", "valueChangedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
    await migration.addColumn("profileProperties", "stateChangedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
    await migration.addColumn("profileProperties", "confirmedAt", {
      type: DataTypes.DATE,
      allowNull: true,
    });
  },

  down: async function (migration) {
    await migration.removeColumn("profiles", "state");
    await migration.removeColumn("profileProperties", "state");
    await migration.removeColumn("profileProperties", "valueChangedAt");
    await migration.removeColumn("profileProperties", "stateChangedAt");
    await migration.removeColumn("profileProperties", "confirmedAt");
  },
};
