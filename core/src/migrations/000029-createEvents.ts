export default {
  up: async function (migration, DataTypes) {
    await migration.createTable("events", {
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

    await migration.addIndex("events", ["type"], {
      unique: false,
      fields: ["type"],
    });

    await migration.addIndex("events", ["profileGuid"], {
      unique: false,
      fields: ["profileGuid"],
    });

    await migration.addIndex("events", ["anonymousId"], {
      unique: false,
      fields: ["anonymousId"],
    });

    await migration.addIndex("events", ["occurredAt"], {
      unique: false,
      fields: ["occurredAt"],
    });

    await migration.createTable("eventData", {
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

    await migration.addIndex("eventData", ["eventGuid"], {
      unique: false,
      fields: ["eventGuid"],
    });
  },

  down: async function (migration) {
    await migration.dropTable("events");
    await migration.dropTable("eventData");
  },
};
