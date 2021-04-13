export default {
  up: async function (migration, DataTypes) {
    await migration.sequelize.transaction(async () => {
      await migration.createTable("teams", {
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

        name: {
          type: DataTypes.STRING(191),
          allowNull: false,
        },

        read: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },

        write: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },

        administer: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },

        deletable: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      });

      await migration.addIndex("teams", ["name"], {
        unique: true,
        fields: ["name"],
      });
    });
  },

  down: async function (migration) {
    await migration.sequelize.transaction(async () => {
      await migration.dropTable("teams");
    });
  },
};
