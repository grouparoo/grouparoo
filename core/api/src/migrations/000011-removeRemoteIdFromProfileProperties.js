module.exports = {
  up: async function (migration, DataTypes) {
    await migration.removeColumn("profiles", "remoteId");
    await migration.removeColumn("profiles", "primaryProperty");

    await migration.removeColumn("profileProperties", "valueString");
    await migration.removeColumn("profileProperties", "valueNumber");
    await migration.removeColumn("profileProperties", "valueDate");
    await migration.removeColumn("profileProperties", "type");

    await migration.addColumn("profileProperties", "rawValue", {
      type: DataTypes.TEXT,
      allowNull: false,
      after: "key",
    });
  },

  down: async function (migration, DataTypes) {
    await migration.addColumn("profiles", "remoteId", {
      type: DataTypes.STRING(191),
      allowNull: true,
    });

    await migration.addColumn("profiles", "primaryProperty", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("profileProperties", "valueString", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("profileProperties", "valueNumber", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("profileProperties", "valueDate", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.addColumn("profileProperties", "type", {
      type: DataTypes.STRING(191),
      allowNull: false,
    });

    await migration.removeColumn("profileProperties", "rawValue");
  },
};
