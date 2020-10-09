module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable("messages", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      from: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      subject: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      readAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
  },

  down: async function (migration) {
    await migration.dropTable("messages");
  },
};
