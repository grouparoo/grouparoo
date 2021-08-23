import Sequelize from "sequelize";

export default {
  up: async (
    queryInterface: Sequelize.QueryInterface,
    DataTypes: typeof Sequelize
  ) => {
    await queryInterface.createTable("events", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      producerGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      profileGuid: {
        type: DataTypes.STRING(40),
        allowNull: true,
      },

      type: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      userId: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },

      anonymousId: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      ipAddress: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      occurredAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      profileAssociatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
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

    await queryInterface.addIndex("events", ["type"], {
      unique: false,
      fields: ["type"],
    });

    await queryInterface.addIndex("events", ["profileGuid"], {
      unique: false,
      fields: ["profileGuid"],
    });

    await queryInterface.addIndex("events", ["anonymousId"], {
      unique: false,
      fields: ["anonymousId"],
    });

    await queryInterface.addIndex("events", ["occurredAt"], {
      unique: false,
      fields: ["occurredAt"],
    });

    await queryInterface.createTable("eventData", {
      guid: {
        type: DataTypes.STRING(40),
        primaryKey: true,
      },

      eventGuid: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      key: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },

      value: {
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
    });

    await queryInterface.addIndex("eventData", ["eventGuid"], {
      unique: false,
      fields: ["eventGuid"],
    });
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("events");
    await queryInterface.dropTable("eventData");
  },
};
