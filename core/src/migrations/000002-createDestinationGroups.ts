export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("destinationGroups", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      destinationGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      groupGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
    });

    await migration.addIndex(
      "destinationGroups",
      ["destinationGuid", "groupGuid"],
      {
        unique: true,
        fields: ["destinationGuid", "groupGuid"],
      }
    );
  },

  down: async function (migration) {
    await migration.dropTable("destinationGroups");
  },
};
