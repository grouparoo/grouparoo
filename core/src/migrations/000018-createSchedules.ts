import Sequelzie from "sequelize";

export default {
  up: async (
    queryInterface: Sequelzie.QueryInterface,
    DataTypes: typeof Sequelzie
  ) => {
    await queryInterface.createTable("schedules", {
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

      sourceGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      state: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      recurring: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

      recurringFrequency: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
    });

    await queryInterface.addIndex("schedules", ["name"], {
      unique: true,
      fields: ["name"],
    });

    await queryInterface.addIndex("schedules", ["sourceGuid"], {
      fields: ["sourceGuid"],
    });

    await queryInterface.addIndex("schedules", ["state"], {
      fields: ["state"],
    });
  },

  down: async (queryInterface: Sequelzie.QueryInterface) => {
    await queryInterface.dropTable("schedules");
  },
};
