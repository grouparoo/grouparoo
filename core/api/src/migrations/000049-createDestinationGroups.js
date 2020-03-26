module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "destinationGroups",
      {
        guid: {
          type: DataTypes.STRING(40),
          primaryKey: true,
        },

        destinationGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        groupGuid: {
          type: DataTypes.STRING(40),
          allowNull: false,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex(
      "destinationGroups",
      ["destinationGuid", "groupGuid"],
      {
        unique: true,
        fields: ["destinationGuid", "groupGuid"],
      }
    );

    await migration.addColumn("destinations", "trackAllGroups", {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: async function (migration) {
    await migration.dropTable("destinations");
  },
};
