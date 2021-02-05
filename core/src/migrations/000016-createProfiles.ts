export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("profiles", {
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
    });
  },

  down: async function (migration) {
    await migration.dropTable("profiles");
  },
};
