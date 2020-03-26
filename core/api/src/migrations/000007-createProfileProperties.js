module.exports = {
  up: async function (migration, DataTypes) {
    await migration.createTable(
      "profileProperties",
      {
        guid: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },

        profileGuid: {
          type: DataTypes.UUID,
          allowNull: false,
        },

        key: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        type: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        valueNumber: {
          type: DataTypes.BIGINT,
          allowNull: true,
        },

        valueString: {
          type: DataTypes.TEXT,
          allowNull: true,
        },

        valueDate: {
          type: DataTypes.DATE,
          allowNull: true,
        },

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        deletedAt: DataTypes.DATE,
      },
      {
        charset: "utf8mb4",
      }
    );

    await migration.addIndex("profileProperties", ["profileGuid", "key"], {
      unique: true,
      fields: ["profileGuid", "key"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("profileProperties");
  },
};
